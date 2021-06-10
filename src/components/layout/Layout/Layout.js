import classes from './Layout.module.css'
import MainNavigation from '../../layout/MainNavigation/MainNavigation'

export const Layout = props => {
  const { children } = props

  return (
    <>
      <MainNavigation />
      <main className={classes.Main}>
        { children }
      </main>
    </>
  )
}