import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 px-4 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group",
  {
    variants: {
      variant: {
        default:
          'bg-[#7A3B3B] text-white border border-[#7A3B3B] hover:bg-white hover:text-[#7A3B3B]',
        social:
          'bg-[#7A3B3B] text-white border border-[#7A3B3B] hover:bg-white hover:text-[#7A3B3B]',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link:
          'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-auto',
        sm: 'h-auto',
        lg: 'h-auto',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  icon,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon?: React.ReactNode
  }) {
  const Comp = asChild ? Slot : 'button'

  const sizeClasses = {
    default: { text: 'py-2.5', icon: 'w-5 h-5' },
    sm: { text: 'py-2 text-sm', icon: 'w-4 h-4' },
    lg: { text: 'py-3 text-base', icon: 'w-6 h-6' },
  }

  const currentSize =
    size === 'icon' || size === 'icon-sm' || size === 'icon-lg'
      ? 'default'
      : size || 'default'

  if (icon) {
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {/* Icon LEFT */}
        <div
          className={cn(
            sizeClasses[currentSize].icon,
            "bg-white text-[#7A3B3B] rounded-full flex items-center justify-center transition group-hover:bg-white group-hover:text-[#7A3B3B] [&_svg]:pointer-events-none [&_svg]:shrink-0"
          )}
        >
          {icon}
        </div>

        {/* Text */}
        <span className={sizeClasses[currentSize].text}>
          {children}
        </span>
      </Comp>
    )
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
