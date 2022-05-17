using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CompanyEmployees.Migrations
{
    public partial class InitialRoleSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a3bb1b00-1d79-4687-9b42-3c3c7afeff9d", "3f862290-c5e3-4674-97d6-0ae5f265923c", "Viewer", "VIEWER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "bc7584a9-3582-485a-8acd-c6b90806058d", "3f18c2b9-7a20-4150-ac60-c05ce81b8623", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a3bb1b00-1d79-4687-9b42-3c3c7afeff9d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bc7584a9-3582-485a-8acd-c6b90806058d");
        }
    }
}
