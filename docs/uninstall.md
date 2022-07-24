# Uninstall Node
[Instrucciones NPM para solucionar el problema con los packetes globales](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

For Mac the easiest way is to use brew uninstall node.
`brew uninstall node`

If Node was not installed throught brew we need this command to uninstall

```shell
curl -ksO https://gist.githubusercontent.com/nicerobot/2697848/raw/uninstall-node.sh
chmod +x ./uninstall-node.sh
./uninstall-node.sh
rm uninstall-node.sh
```
El gist que nos descargamos tiene estas instrucciones
```shell
#!/bin/sh
(( ${#} > 0 )) || {
  echo 'DISCLAIMER: USE THIS SCRIPT AT YOUR OWN RISK!'
  echo 'THE AUTHOR TAKES NO RESPONSIBILITY FOR THE RESULTS OF THIS SCRIPT.'
  echo "Disclaimer aside, this worked for the author, for what that's worth."
  echo 'Press Control-C to quit now.'
  read
  echo 'Re-running the script with sudo.'
  echo 'You may be prompted for a password.'
  sudo ${0} sudo
  exit $?
}
# This will need to be executed as an Admin (maybe just use sudo).

for bom in org.nodejs.node.pkg.bom org.nodejs.pkg.bom; do

  receipt=/var/db/receipts/${bom}
  [ -e ${receipt} ] && {
    # Loop through all the files in the bom.
    lsbom -f -l -s -pf ${receipt} \
    | while read i; do
      # Remove each file listed in the bom.
      rm -v /usr/local/${i#/usr/local/}
    done
  }

done

# Remove directories related to node.js.
rm -vrf /usr/local/lib/node \
  /usr/local/lib/node_modules \
  /var/db/receipts/org.nodejs.*

exit 0
```

Despues hay que borrar los 2 directorios principales
```shell
cd /usr/local/bin
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/bin/node
```