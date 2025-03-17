# Product Comparison App

This React application allows users to compare products fetched from the [DummyJSON Products API](https://dummyjson.com/products). It features a sidebar navigation, product details table, and a compare products page.

## Features

-   **Product Details:**
    -      Displays a paginated table of products with sortable columns (Title, Description, Price, Discount, Brand, Category, Image).
    -      "Compare" button for each product to add it to the comparison list.
    -      Highlights compared attributes on product detail page.
    -      Disables the "Compare" button for products already in the comparison list.
-   **Compare Products:**
    -      Displays a side-by-side comparison of selected products.
    -      "Add More" button to open a modal for adding more products to compare.
    -      Modal displays a table of available products for selection.
    -      Ability to remove products from the comparison list.
    -      Maximum of 4 products can be compared at a time.
-   **Navigation:**
    -      Sidebar navigation with "Product Details" and "Compare Products" links.
    -      Navigation between pages using React Router.
-   **Error Handling:**
    -      Displays error messages when attempting to add more than 4 products to compare.
-   **Lazy Loading:**
    -   Uses React Lazy and Suspense to improve performance by loading components only when needed.
-   **Context API:**
    -   Uses React Context API to manage and share product and compare list data across components.
-   **UI Enhancements:**
    -   Improved color scheme for better visual appeal.
    -   Active menu item highlighting.
    -   Responsive design using Ant Design components.

## Technologies Used

-   React.js
-   Ant Design (antd)
-   React Router
-   Axios (for API requests)
-   Context API
-   Lazy Loading

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd [repository directory]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

4.  **Open the application in your browser:**

    ```
    http://localhost:3000
    ```

## Deployment

This application can be deployed on any static hosting service like Netlify or Vercel.

1.  **Build the application:**

    ```bash
    npm run build
    ```

2.  **Deploy the `build` folder to your hosting service.**

## File Structure
