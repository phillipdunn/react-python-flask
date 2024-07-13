import requests

def get_report(id):
    try:
        res = requests.get(f'https://owpublic.blob.core.windows.net/tech-task/reports/{id}')
        if res.status_code == 200:
            data = res.json()
            name = data.get('name')
            credit_cost = data.get('credit_cost')
            # return [name,credit_cost]
            return round(credit_cost,2)
        else:
            print("No data available")
            return None
            
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
