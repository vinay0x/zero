export enum Claims = {
  ManageUsers = "ManageUsers";
  ManageBilling = "ManageBilling";
  ManageOrganization = "ManageOrganization";
} 

export const roles = {
  admin: {
    label: "Admin",
    hasClaims: Object.values(Claims)
  },
  manager: {
    label: "Manager",
    hasClaims: [Claims.ManageUsers]
  },
  regular: {
    label: "Regular User",
    hasClaims: []
  }
}