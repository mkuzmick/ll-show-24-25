import { ReactNode } from 'react'

export default function BigText({children}: {children: ReactNode;}) {
    return (
      <>
        <h1 className="text-4xl md:text-7xl font-black">{children}</h1>
      </>
    )
  }
  