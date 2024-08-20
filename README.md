# Profile.fyi | Dining

Profile.fyi | Dining is a unique offering by Profile.fyi , which encourages everyone to eat mindfully , order less , eat home cooked food. Its high time we recognise the power of food and water to not only nourish our body ,but mind and spirit. All the resturants listed in Profile.fyi | Dining serves highly energised food.

## Screenshots

![Landing Page](https://res.cloudinary.com/dzbmc0pit/image/upload/v1724044973/eggqudlgtybzlub2o0ir.png)

## Features

- Product Listing - Display at least 6-10 products using a grid layout
- Light / Dark mode toggle
- Add to cart - Add the chosen product to a user's virtual shopping cart.
  Update the cart icon or a dedicated counter to reflect the number of added items .
  Provide visual feedback (e.g., animation) confirming the item's addition.

- Cart page - Display a dedicated cart page where users can manage their selected products
-  A list of all added products, displaying: Product image , Product name  , Product price
   - Quantity selector (up/down buttons or input field) to adjust the amount of each item.
   - "Remove Item" button to delete a specific product from the cart.
   - Cart summary section:
     - Subtotal: Calculate the total cost of all items in the cart based on their quantity and price.
     - Discounts : Implement the ability to apply discounts on the total price. 
     - Total price (including discounts): Display the final price the user needs to pay.
     - Checkout button: This can redirect to a simulated checkout page or provide a message indicating successful cart addition.
 
- Increase / Decrease Quantity 
  
## Why did I choose SWIGGY API ? Instead of some dummy free API avialable online?

- To exhibit my ability to handle and properly integrate real world API .
- Images are always available in optimised quality in this API .
- No matter what the data is , I intented to exhibit my ability to manage state properly using redux tolkit and my abilities to create symmetric , clean & accessible web application. 

## Optimizations

- Added "priority" attribute to <Image/> tags where image was LCP element .
- Improved accesibility from 79 to 91 , by adding proper aria-label to Links and Buttons and using semantic HTML .
  | Metric | Score |
  | ----------------- | ------------------------------------------------------------------ |
  | Performance | 95 |
  | SEO | 91|
  | Accessibility | 91 |
  | Best Practices | 100 |

## Tech Stack

**Client:** Next.js, Redux Toolkit, TailwindCSS

## Run Locally

Clone the project

```bash
  git clone https://github.com/gyandeeparyan/profile_dining
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Deployment

Deploy on Vercel

## Demo

- https://profile-dining.vercel.app/

## Feedback

- https://sameeksha.vercel.app/u/gyan
