import { useState, useEffect } from 'react';

export interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    const uploadBuildingData = async () => {
      const allFloors:Floor[] = await import ('../data/building.json');
      setBuildingData(allFloors);
    }
    uploadBuildingData();
    
  }, [])
  

  const getFloorByIndex = (floorIndex:number): Floor | undefined =>
  {
    return buildingData[floorIndex]
  }
  const getListOfActivities = ():string[]=>{
    return buildingData.map((floor)=>floor.activity)
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
