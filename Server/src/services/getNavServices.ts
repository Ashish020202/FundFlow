import axios from "axios"

export const fetchNav = async () => {
    try {
        const response = await axios.get("https://www.amfiindia.com/spages/NAVAll.txt");
        const data = response.data;
        let jsonResult = [];
        let lines = data.split("\n");
    
        for (let line of lines.slice(1)) {
          let fields = line.split(";");
    
          if (fields.length >= 5) {
            jsonResult.push({
              schemeCode: fields[0].trim(),
              isinDivPayout: fields[1].trim(),
              isinDivReinvestment: fields[2].trim(),
              schemeName: fields[3].trim(),
              netAssetValue: fields[4].trim(),
              date: fields[5]?.trim() || "",
            });
          }
        }

        return jsonResult;

    } catch (error) {

        throw new Error("Failed to fetch NAV data");
        
    }
}