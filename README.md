# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Mô tả hoạt động quay thưởng

Sử dụng Vite + Shadcn + Tailwincss

sử dụng Google Sheet để lưu thông tin và thống kê số lượng phần thưởng

# Cách sử dụng

-   Tải và mở code
-   Khởi tạo môi trường: npm i
-   Tạo file .env với các tham số được lấy từ google sheet và google form:
    VITE_FORM_URL
    VITE_ENTRY_NAME
    VITE_ENTRY_PHONE
    VITE_ENTRY_MAIL
    VITE_ENTRY_REWARD
-   chạy project với lệnh : npm run dev
