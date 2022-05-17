using CompanyEmployees.Entities.Models;

namespace CompanyEmployees.Contracts
{
    public interface ICompanyRepository
    {
        IEnumerable<Company> GetAllCompanies(bool trackChanges);
    }
}
