# Basic step up, no automation

SSH into the EC2 instnce, and type in the following commands.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 4.4.5
sudo yum install -y git
git clone https://github.com/formdenes/hackatonLetDogsOut.git
cd hackatonLetDogsOut/AwesomeProjectBackend/
```

After this use vim, and delete ""dotenv": "^8.0.0"," line from package.json, and delete the following two lines from backend.js "const env = require('dotenv'); env.config();"

After deletion use vim to change the DB connection from variable to specific data in env.

Then run these codes.

```
npm install
node backend.js
```

If everythings is running should see something like this.

```Server is running at port: 8080```