using Microsoft.EntityFrameworkCore.Migrations;

namespace Tailor.Management.ABP.Migrations
{
    public partial class AddedSerialNumberToFormFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SlNo",
                table: "AppFormFields",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SlNo",
                table: "AppFormFields");
        }
    }
}
