import requests
from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    try:
        res = requests.get('https://owpublic.blob.core.windows.net/tech-task/messages/current-period')
        
        if res.status_code == 200:
            data = res.json()
            ow_data = data['messages']
            new_data_for_client = {"usage":[]}
            # loop through data
            for item in ow_data:
                 # create new item TODO calculate cost
                    new_item = {   
                        'messageId': item['id'],
                        'timeStamp': item['timestamp'],
                        'cost':5
                        }
                    if 'report_id' in item:
                     # if item has report_id, add it to new item TODO get cost
                        new_item['reportName'] = item['report_id']
                        new_item['cost'] = 10            
                    new_data_for_client['usage'].append(new_item) 
            return new_data_for_client
        
        else:
            print("No data available")
            return None
            
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None

if __name__ == '__main__':
    app.run(debug=True)
