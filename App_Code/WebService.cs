using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{
    private string connectionString = "server=.;database=userdb;Integrated Security=True;";
    private DatabaseManager dbManager;

    public WebService()
    {
        dbManager = new DatabaseManager(connectionString);
    }

    [WebMethod]
    public string signup(string username, string password)
    {
        string checkQuery = string.Format("SELECT COUNT(*) FROM users WHERE user_username = '{0}'", username);
        DataTable result = dbManager.ExecuteQuery(checkQuery);

        int count = 0;
        if (result.Rows.Count > 0)
        {
            count = Convert.ToInt32(result.Rows[0][0]);
        }

        if (count > 0)
        {
            return "alerdy";
        }
        else
        {
            string insertQuery = string.Format("INSERT INTO users (user_username, user_userpass, user_mobile) VALUES ('{0}', '{1}')", username, password);
            dbManager.ExecuteNonQuery(insertQuery);
            return "success";
        }
    }

    [WebMethod]
    public string login(string username, string password)
    {
        string query = string.Format("SELECT COUNT(*) FROM users WHERE user_username = '{0}' AND user_userpass = '{1}'", username, password);
        DataTable result = dbManager.ExecuteQuery(query);
        int count = Convert.ToInt32(result.Rows[0][0]);

        if (count > 0)
        {
            // Fetch user mobile number
            string mobileQuery = string.Format("SELECT user_mobile FROM users WHERE user_username = '{0}'", username);
            DataTable mobileResult = dbManager.ExecuteQuery(mobileQuery);
            if (mobileResult.Rows.Count > 0)
            {
                string mobile = mobileResult.Rows[0]["user_mobile"].ToString();
                return mobile;
            }
            else
            {
                return "Mobile number not found";
            }
        }
        else
        {
            return "*1";
        }
    }

}
