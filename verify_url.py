import requests

def main():
    urls = [
        "https://portfolio.mavinic.com/",
        "https://portfolio.mavinic.com/index.html",
        "https://portfolio.mavinic.com/favicon.ico"
    ]
    for url in urls:
        print(f"Checking {url}...")
        try:
            r = requests.get(url, allow_redirects=True, verify=False, timeout=10)
            print(f" Status: {r.status_code}")
            if r.status_code == 200:
                print(f" Snippet: {r.text[:100].strip()}")
        except Exception as e:
            print(f" Error: {e}")

if __name__ == "__main__":
    main()
