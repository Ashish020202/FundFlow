import { Request,Response } from "express"
import { fetchNav } from "../services/getNavServices"

export const getDailyNav = async(req:Request,res:Response) => {

   try {

    const DailyNavData =await fetchNav();
    // console.log("daily nav",DailyNavData);
    
    res.status(200).json(DailyNavData);
    
   } catch (error) {

    res.status(500).json({ error: "Failed to fetch data" });
    
   }

}