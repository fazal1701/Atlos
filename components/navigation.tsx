'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Home,
  BookOpen,
  Video,
  FlaskConical,
  Briefcase,
  Users,
  Trophy,
  Target,
  Menu,
  User,
  Settings,
  LogOut,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const navigationItems = [
  {
    title: 'Home',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: BookOpen,
    submenu: [
      {
        title: 'All Modules',
        href: '/learn',
        description: 'Browse all learning modules',
      },
      {
        title: 'Analytics',
        href: '/learn?category=analytics',
        description: 'Sports analytics and data science',
      },
      {
        title: 'Coaching',
        href: '/learn?category=coaching',
        description: 'Coaching fundamentals and strategy',
      },
      {
        title: 'Business',
        href: '/learn?category=business',
        description: 'Sports business and marketing',
      },
    ],
  },
  {
    title: 'Analyze',
    href: '/videos',
    icon: Video,
    submenu: [
      {
        title: 'Video Library',
        href: '/videos',
        description: 'Your uploaded game footage',
      },
      {
        title: 'Upload Video',
        href: '/videos/upload',
        description: 'Upload new game film',
      },
      {
        title: 'Clip Collections',
        href: '/videos/collections',
        description: 'Organized video playlists',
      },
    ],
  },
  {
    title: 'Stadium Lab',
    href: '/stadium-lab',
    icon: FlaskConical,
    submenu: [
      {
        title: 'Live Observation',
        href: '/stadium-lab',
        description: 'Capture data during live games',
      },
      {
        title: 'My Reports',
        href: '/stadium-lab/reports',
        description: 'View your observation reports',
      },
      {
        title: 'Templates',
        href: '/stadium-lab/templates',
        description: 'Tagging templates and schemas',
      },
    ],
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    icon: Briefcase,
  },
  {
    title: 'Community',
    href: '/community',
    icon: Users,
    submenu: [
      {
        title: 'Feed',
        href: '/community',
        description: 'Community activity and updates',
      },
      {
        title: 'Challenges',
        href: '/community/challenges',
        description: 'Weekly competitions and problems',
      },
      {
        title: 'Clubs',
        href: '/community/clubs',
        description: 'Team and school groups',
      },
      {
        title: 'Mentors',
        href: '/community/mentors',
        description: 'Connect with industry professionals',
      },
    ],
  },
  {
    title: 'Career Pathways',
    href: '/careers',
    icon: Target,
    submenu: [
      {
        title: 'Explore Careers',
        href: '/careers',
        description: 'Discover career opportunities',
      },
      {
        title: 'Mentorship',
        href: '/careers/mentors',
        description: 'Find and connect with mentors',
      },
      {
        title: 'Opportunities',
        href: '/careers/opportunities',
        description: 'Internships and job listings',
      },
    ],
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/70 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Enhanced Atlos Platform Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-purple-700 text-white font-black text-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105 group-hover:rotate-3">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none bg-gradient-to-r from-primary via-purple-600 to-purple-700 bg-clip-text text-transparent">Atlos</span>
              <span className="text-[10px] text-foreground/60 leading-none font-semibold tracking-wider uppercase">Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="h-9">
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.submenu.map((subItem) => (
                            <ListItem
                              key={subItem.href}
                              title={subItem.title}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href}>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'h-9',
                          pathname === item.href && 'bg-accent'
                        )}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side - User menu */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Trophy className="w-5 h-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent',
                          pathname === item.href && 'bg-accent'
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <div className="ml-8 mt-2 flex flex-col gap-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

