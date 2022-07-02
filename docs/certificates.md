# Certificates

## Self-signed certificates
1. First, generate a key file used for self-signed certificate generation with the command below. The command will create a private key as a file called key.pem.
```
openssl genrsa -out key.pem
```
2. Next, generate a certificate service request (CSR) with the command below. You’ll need a CSR to provide all of the input necessary to create the actual certificate.
```
openssl req -new -key key.pem -out csr.pem
```
3. 

