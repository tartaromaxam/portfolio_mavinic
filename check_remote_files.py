import ftplib

def list_remote_directory(ftp, remote_path):
    print(f"--- Listing directory: {remote_path} ---")
    try:
        lines = []
        ftp.cwd(remote_path)
        ftp.dir(lines.append)
        for line in lines:
            print(line)
    except Exception as e:
        print(f"Error listing directory: {e}")

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
        
        print("Moving to root (/)")
        ftp.cwd("/")
        
        print("Listing root:")
        root_items = ftp.nlst(".")
        print(f"Items in root: {root_items}")
        
        if "domains" in root_items:
            list_remote_directory(ftp, "domains/mavinic.com/public_html")
        else:
            print("\n'domains' folder not found at root.")
            
        ftp.quit()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
