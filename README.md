# Game of Towers

### Demo: https://gameoftowers.herokuapp.com/

### To run this in development mode
* if this is your first time, type "npm install" to install the necessary packages
* in a terminal, type "npm run build" (you only have to do this once)
	* after you do "npm run build", you can use "npm run dev" to continuously watch your html, css, and js files. This will also run the server. (nodemon is installed and watching your every move ( ͡° ͜ʖ ͡°))
* install mongo on your machine
	* c9: 
		* sudo apt-get install -y mongodb-org
		* cd ~/workspace
		* mkdir mongo_data
		* echo 'mongod --bind_ip=$IP --dbpath=/home/ubuntu/workspace/mongo_data --nojournal --rest "$@"' > run_mongod
		* chmod a+x run_mongod
		* to run mongo: ./run_mongod
	* macintosh
		* brew update
		* brew install mongodb
		* to run mongo: sudo mongod
* in your browser, go to localhost:8080
* that is all.
