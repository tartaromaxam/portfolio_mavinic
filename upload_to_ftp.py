import os
import ftplib

def upload_directory(ftp, local_dir, remote_path):
    print(f"Uploading {local_dir} to {remote_path}")
    
    # Try to Create remote directory if it doesn't exist
    try:
        ftp.mkd(remote_path)
    except Exception as e:
        # Directory likely already exists
        pass
        
    for item in os.listdir(local_dir):
        local_item = os.path.join(local_dir, item)
        remote_item = f"{remote_path}/{item}"
        
        if os.path.isfile(local_item):
            print(f"Uploading file: {item}")
            with open(local_item, "rb") as f:
                ftp.storbinary(f"STOR {remote_item}", f)
        elif os.path.isdir(local_item):
            upload_directory(ftp, local_item, remote_item)

def main():
    HOST = "82.25.72.52"
    USER = "u158366747"
    PASS = "Mc100805#"
    PORT = 21
    
    LOCAL_PATH = r"d:\extenção\OneDrive\Área de Trabalho\TUDO DO DESK 15 02 2026\site-marcelo\Figma_Portfolio\out"
    TARGET_DIR = "/domains/portfolio.mavinic.com.br/public_html"
    
    try:
        ftp = ftplib.FTP()
        print(f"Connecting to {HOST}...")
        ftp.connect(HOST, PORT)
        print(f"Logging in as {USER}...")
        ftp.login(USER, PASS)
        
        # Enable passive mode
        ftp.set_pasv(True)
        
        # Create domains/mavinic.com/public_html structure if needed
        dirs = TARGET_DIR.split('/')
        current = ""
        for d in dirs:
            current = f"{current}/{d}" if current else d
            try:
                ftp.mkd(current)
            except:
                pass
        
        upload_directory(ftp, LOCAL_PATH, TARGET_DIR)
        
        ftp.quit()
        print("Upload completed successfully!")
    except Exception as e:
        print(f"Error during upload: {e}")

if __name__ == "__main__":
    main()
