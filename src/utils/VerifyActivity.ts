import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: { role: string };
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  console.log(roles.indexOf(role.role) >= activities.indexOf(activity));
  
  return roles.indexOf(role.role) >= activities.indexOf(activity);
};

export default useIsVerified;
