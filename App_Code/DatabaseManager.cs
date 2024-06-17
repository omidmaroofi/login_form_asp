using System;
using System.Data;
using System.Data.SqlClient;

public class DatabaseManager
{
    private string connectionString;

    public DatabaseManager(string connectionString)
    {
        this.connectionString = connectionString;
    }

    public void ExecuteNonQuery(string query)
    {
        try
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                command.ExecuteNonQuery();
            }
            Console.WriteLine("Query executed successfully.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error executing query: " + ex.Message);
        }
    }

    public DataTable ExecuteQuery(string query)
    {
        DataTable dt = new DataTable();
        try
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                SqlDataAdapter adapter = new SqlDataAdapter(command);
                adapter.Fill(dt);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error executing query: " + ex.Message);
        }
        return dt;
    }
}
