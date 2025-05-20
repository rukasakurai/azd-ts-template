# Application code

- Use TypeScript when possible
- Vite is used for building the frontend.
- Prefer async/await in backend code.

# IaC

- Use Bicep when possible
- Use Azure Verified Modules (https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/modules#public-module-registry) instead of custom Bicep modules.
- Use system-managed identities where possible.

# README.md

- Always check if the README.md is up to date, and update it if necessary.

# Reminder

- Use Azure Verified Modules (e.g., `module storage 'br/public:avm/res/storage/storage-account:0.18.0'`) instead of custom Bicep modules.
