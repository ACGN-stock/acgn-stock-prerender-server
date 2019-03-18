# acgn-stock-prerender server

供 ACGN-stock 使用的 [prerender server](https://github.com/prerender/prerender)

## 安裝chrome
執行以下指令
```sh
wget -qO- https://raw.githubusercontent.com/SoftwareSing/linux-install/master/install-chrome.sh | bash
```
安裝完後重開機

## 安裝package
```sh
npm install pm2 -g
npm install
```

## 啟動
```sh
pm2 start pm2.json
```
