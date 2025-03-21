### SPOTIFY CLONE
## Made with React Js, Next Js, Tailwind CSS, Zustand and Typescript/

## What I learnt from building this porject
<p>1. Global state management with zustand - In some cases some logic that fetches data from the backend would be used more frequently, That's why we create a global state is required</p>

```javascript
import { create } from "zustand";

interface Store {
  isLoggedIn: boolean;
  password: string | null;
  error: string | null;
  checkUser: () => Promise<void>;
  isLoading: boolean;
}

export const useStore = create<Store>((set) => ({
  isLoggedIn: false,
  password: null,
  error: null,
  isLoading: false,
  
  checkUser: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/hello");
      set({ password: response.data });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "An error occurred" });
    } finally {
      set({ isLoading: false });
    }
  }
}));
```

<p>2. Authentication with Clerk/Express JS - Useful clerk functions like, useUser(), useSignIn(), useAuth() were used to implement auhentication kind of seamlessly</p>
<p>3. AuthProviders for the entire application, this basically  provides the application with auth tokens gotten from clerk</p>
<p>4. React Singleton design pattern</p>
<p>Auth Call backs and SSO callback</p>
<p>advanced grid Layout</p>
<p>React router dom</p>
And More...
