import axios from 'axios';
import { Request,Response } from 'express';

interface navData  {

  schemeCode: number;
  schemeName: string;
  isinGrowth: string | null;
  isinDivReinvestment: string | null;

}


const AMFI_API = 'https://api.mfapi.in/mf';


const calculateChange = (navHistory:any) => {
  const latestNAV = navHistory[0]?.nav;
  const oldNAV = navHistory[29]?.nav;
  if (!latestNAV || !oldNAV) return 0;
  return (((latestNAV - oldNAV) / oldNAV) * 100);
};



export const calculateNAV = async(req:Request,res:Response) => {

    try {

      const allMFResponse = await axios.get(AMFI_API);
      const mfData = allMFResponse.data.slice(0,100);

      const NAVData = mfData.map(async (fund:navData) => {
        const navresponse =await axios.get(`${AMFI_API}/${fund.schemeCode}`);
        const navHistory = navresponse.data.data.slice(0,30)
        
        return {
          
          schemName:fund.schemeName,
          schemeCode:fund.schemeCode,
          latestNav:navHistory[0]?.nav,
          oldNav:navHistory[29]?.nav,
          changePercentage:calculateChange(navHistory)
          
        }

        
      })

      const fundData = await Promise.all(NAVData);

      res.status(200).json(fundData);
      return
                
        
    } catch (error) {

        res.status(500).json({ error: "Failed to fetch data" });
        
    }

  
}

