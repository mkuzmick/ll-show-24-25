import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const firstFolioFont = localFont({
  src: '../../fonts/shak-first-folio.otf',
  display: 'swap',
})
 
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en" className={firstFolioFont.className}>
      {children}
    </div>
  )
}