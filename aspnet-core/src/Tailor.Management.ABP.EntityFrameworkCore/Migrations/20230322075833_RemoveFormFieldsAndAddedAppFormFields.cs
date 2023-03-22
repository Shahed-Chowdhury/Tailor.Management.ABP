using Microsoft.EntityFrameworkCore.Migrations;

namespace Tailor.Management.ABP.Migrations
{
    public partial class RemoveFormFieldsAndAddedAppFormFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FormFields_AppFormTables_FormId",
                table: "FormFields");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FormFields",
                table: "FormFields");

            migrationBuilder.RenameTable(
                name: "FormFields",
                newName: "AppFormFields");

            migrationBuilder.RenameIndex(
                name: "IX_FormFields_FormId",
                table: "AppFormFields",
                newName: "IX_AppFormFields_FormId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AppFormFields",
                table: "AppFormFields",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AppFormFields_AppFormTables_FormId",
                table: "AppFormFields",
                column: "FormId",
                principalTable: "AppFormTables",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppFormFields_AppFormTables_FormId",
                table: "AppFormFields");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AppFormFields",
                table: "AppFormFields");

            migrationBuilder.RenameTable(
                name: "AppFormFields",
                newName: "FormFields");

            migrationBuilder.RenameIndex(
                name: "IX_AppFormFields_FormId",
                table: "FormFields",
                newName: "IX_FormFields_FormId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FormFields",
                table: "FormFields",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FormFields_AppFormTables_FormId",
                table: "FormFields",
                column: "FormId",
                principalTable: "AppFormTables",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
