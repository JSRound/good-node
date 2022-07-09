# Certificates
Main page with information [OpenSSL](https://www.openssl.org/)
Web with free books and documentation referenced by openssl [FeistyDuck](https://www.feistyduck.com/)

## [What Is a Certificate Authority (CA)?](https://www.ssl.com/faqs/what-is-a-certificate-authority/)

## Orgs que dan certificados
* ### [Let's encrypt](https://letsencrypt.org/)
* ### [Tutorial sobre como usar letsencrypt bot](https://dev.to/omergulen/step-by-step-node-express-ssl-certificate-run-https-server-from-scratch-in-5-steps-5b87)

## <details><summary>Self-signed certificates</summary>

[Example](https://adamtheautomator.com/https-nodejs/)
1. First, generate a key file used for self-signed certificate generation with the command below. The command will create a private key as a file called key.pem.
```
openssl genrsa -out key.pem
```
[genrsa](https://www.openssl.org/docs/manmaster/man1/genrsa.html)
2. Next, generate a certificate service request (CSR) with the command below. You’ll need a CSR to provide all of the input necessary to create the actual certificate.
```
openssl req -new -key key.pem -out csr.pem
```
[req](https://www.openssl.org/docs/manmaster/man1/openssl-req.html)
En este segundo comando es donde te piden una serie de datos para crear el certificado:
Pais, region, localidad
Tambien piden una contrase;a, que normalmente siver para modificar el certificado despues.

3. Finally, generate your certificate by providing the private key created to sign it with the public key created in step two with an expiry date of 9,999 days. This command below will create a certificate called cert.pem.
```
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```

</details>

## Command to get an automated certificate with certbot
`certbot -d jesusredondo.com --manual --preferred-challenges dns certonly`

It saves the certificates in a path that can't be reached.
You need to use   
`sudo cat /etc/letsencrypt/live/jesusredondo.com/fullchain.pem`


## [Web to check certificates](https://www.sslshopper.com/ssl-checker.html#hostname=www.jesusredondo.com)
