import requests
from flask import Flask
from reports import get_report
from helpers import calculate_cost

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
                # create new item and calculate cost
                    cost = calculate_cost(item['text'])
                    new_item = {   
                        'message_id': item['id'],
                        'timestamp': item['timestamp'],
                        'credits_used':round(cost,2)
                        }
                # if item has report_id, add it to new item and get creditsused and name from endpoint
                    if 'report_id' in item:
                        # TODO handle falling back to calculate_cost if report_id is not found
                        report = get_report(item['report_id'])
                        # new_item['report_name'] = report[0] != None and report[0] or ''
                        # new_item['credits_used'] = report[1] != None and report[0] or '' 
                        new_item['report_name'] = 'name'
                        new_item['credits_used'] = report   
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
