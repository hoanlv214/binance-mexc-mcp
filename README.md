# Binance-MEXC MCP Agent

## 📌 Giới thiệu
Đây là một **MCP Agent** giúp fetch dữ liệu giá token trực tiếp từ **Binance** và **MEXC**.  
Agent có thể được tích hợp vào hệ thống AI Agent (như COAI Agent, Ratex Agent, v.v.) để truy vấn giá token theo thời gian thực.

## ⚙️ Cấu hình
Trong file `server.json` (hoặc config MCP server), bạn cần khai báo:

```json
{
  "mcpServers": {
    "binance-mexc-mcp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-binance-mexc"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_ACCESS_TOKEN"
      }
    }
  }
}
