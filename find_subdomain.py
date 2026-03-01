import ftplib

def main():
    HOST = "82.25.72.52"
    USER = "u158366747"
    PASS = "Mc100805#"
    PORT = 21
    
    try:
        ftp = ftplib.FTP()
        ftp.connect(HOST, PORT)
        ftp.login(USER, PASS)
        ftp.set_pasv(True)
        
        path = "/domains/mavinic.com/public_html/portfolio"
        print(f"\n--- Checking {path} ---")
        try:
            ftp.cwd(path)
            items = ftp.nlst()
            print(f"Items in {path}: {items}")
        except Exception as e:
            print(f"Error checking {path}: {e}")

        ftp.quit()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
