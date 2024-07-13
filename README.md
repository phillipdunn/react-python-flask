# This project is build with React, Typescript, Python, Flask

I used the Material UI and Flask as they both enable quick development, Typescript probably doesnt help with speed but is a better way to build imo. 

Concessions I made:

 I ran out of time trying to figure out handling null data (this is my firstime writing python), this also blocked me from being able to complete the fallback requirment for no report being available, both in python, so I moved on to the frontend.

 I would of made more components, nav bar, maybe another page, some authetication even? I would of also written more test, currently only has one unit test for the table.
  
## Front end

Libraries used in the Front end include:

- material ui
- react-toastify
- react-test-render
- make-ts-component (my own npm package)

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Back end

In the flask-server directory, you can run the following commands:

- `source venv/bin/activate` -> to activate environment
- `pip3 install Flask` -> to install flask
- `python3 server.py` -> to run the server

It will be running on [http://localhost:5000]
