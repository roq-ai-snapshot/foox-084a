interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own freelancer_profile',
    'Create and manage own worklog',
    'Apply to jobs',
    'Update own application status',
  ],
  ownerAbilities: [
    'Manage hiring',
    'Manage freelancer profiles',
    'Manage worklogs',
    'Manage users',
    'Manage companies',
    'Manage jobs',
    'Manage applications',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/de582402-b213-4e66-9c82-66262b221ed3',
};
