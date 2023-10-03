import { FC } from "react";
import Container from "./ui/Container";
import { Button } from "./ui/button";
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ProfileButton from "./ui/ProfileButton";
import { headerRoutes } from "../constants/data";

interface HeaderProps {
  toggleTheme: () => void;
  theme: "light" | "dark" | null;
}

const Header: FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <header className="sm:flex sm:justify-between py-3  border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {headerRoutes.map((route, i) => (
                    <a
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <a href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">MySTORE</h1>
            </a>
          </div>
          <nav className="mx-6  items-center space-x-4 lg:space-x-6 hidden md:block">
            {headerRoutes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <a
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </a>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={toggleTheme}
            >
              {theme == "dark" ? (
                <Sun className="h-6 w-6 rotate-0 transition-all" />
              ) : (
                <Moon className="absolute h-6 w-6 transition-all " />
              )}

              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
