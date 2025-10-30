import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
    username: string | null;
    setUsername: (username: string | null) => void;
    isAdmin: boolean;
    setIsAdmin: (isAdmin: boolean) => void;
    login: (username: string, isAdmin: boolean) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (username: string, isAdmin: boolean) => {
        setUsername(username);
        setIsAdmin(isAdmin);
    };

    const logout = () => {
        setUsername(null);
        setIsAdmin(false);
    };

    return (
        <UserContext.Provider value={{ username, setUsername, isAdmin, setIsAdmin, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}