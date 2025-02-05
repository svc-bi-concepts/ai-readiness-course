# 📚 Hands-On Data Integration Tutorial

Welcome to the **hands-on tutorial** for setting up **Fivetran, Snowflake, dbt Cloud, and GitHub**.

This tutorial covers:
✅ **Connecting Fivetran to Snowflake**  
✅ **Setting up dbt Cloud for transformation**  
✅ **Using GitHub for version control**  

---

## **🔧 1️⃣ Setting Up Snowflake**

### **Step 1: Create a Snowflake Account**
1. Go to [Snowflake Signup](https://signup.snowflake.com) and create a **free trial account**.
2. Choose **AWS, Azure, or GCP** as your cloud provider.
3. Save your **Account URL, Username, and Password**.

### **Step 2: Create a Snowflake Warehouse**
Run the following **SQL command** in Snowflake to create a **dedicated warehouse**:
```sql
CREATE WAREHOUSE my_wh
  WITH WAREHOUSE_SIZE = 'XSMALL'
  AUTO_SUSPEND = 300
  AUTO_RESUME = TRUE;
```

### **Step 3: Create a Database & Schema**
```sql
CREATE DATABASE fivetran_db;
CREATE SCHEMA fivetran_schema;
```

---

## **🔗 2️⃣ Connecting Fivetran to Snowflake**

### **Step 1: Sign Up for Fivetran**
1. Go to [Fivetran](https://fivetran.com) and create an account.
2. In **Destinations**, click **Set up Snowflake**.
3. Enter your **Snowflake Account URL**, and **Warehouse**.

### **Step 2: Configure Connection**
- **Host**: `<your_snowflake_account>.snowflakecomputing.com`
- **User**: `FIVETRAN_USER`
- **Password**: *Generated Password*
- **Warehouse**: `my_wh`
- **Database**: `fivetran_db`
- **Schema**: `fivetran_schema`

✅ Click **Test Connection** and then **Save**.

---

## **⚙️ 3️⃣ Configuring dbt Cloud**

### **Step 1: Create a dbt Cloud Account**
1. Sign up at [dbt Cloud](https://cloud.getdbt.com).
2. Create a **new project**.
3. Select **Snowflake** as the connection type.

### **Step 2: Configure dbt Cloud Connection**
- **Account URL**: `https://<your_snowflake_account>.snowflakecomputing.com`
- **Database**: `fivetran_db`
- **Schema**: `fivetran_schema`
- **Warehouse**: `my_wh`
- **Role**: `PUBLIC`

Click **Test & Save**.

### **Step 3: Run a dbt Model**
Create a new model (`models/my_model.sql`) with:
```sql
SELECT * FROM fivetran_db.fivetran_schema.table_name;
```
Run:
```bash
dbt run
```
✅ You should see the transformed data.

---

## **🔄 4️⃣ Version Control with GitHub**

### **Step 1: Create a GitHub Repository**
1. Go to [GitHub](https://github.com) and create a new **repository**.
2. Clone it to your local machine:
```bash
git clone https://github.com/your-username/your-repo.git
```

### **Step 2: Push dbt Code to GitHub**
```bash
cd your-repo
git add .
git commit -m "Initial dbt setup"
git push origin main
```
✅ Now your dbt project is version-controlled.

---

## **✅ Next Steps**
🎯 **Schedule Fivetran syncs**  
🎯 **Automate dbt transformations**  
🎯 **Monitor data pipelines**  

🚀 **You're now set up for full data automation!**  

---

### **📖 More Resources**
- [Fivetran Documentation](https://fivetran.com/docs)
- [Snowflake SQL Guide](https://docs.snowflake.com/)
- [dbt Cloud Docs](https://docs.getdbt.com/)
- [GitHub CLI](https://cli.github.com/)
