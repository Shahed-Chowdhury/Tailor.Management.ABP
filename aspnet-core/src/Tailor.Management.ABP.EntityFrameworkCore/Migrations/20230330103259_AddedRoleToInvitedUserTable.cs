using Microsoft.EntityFrameworkCore.Migrations;

namespace Tailor.Management.ABP.Migrations
{
    public partial class AddedRoleToInvitedUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "AppInvitedUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "AppInvitedUsers");
        }
    }
}
