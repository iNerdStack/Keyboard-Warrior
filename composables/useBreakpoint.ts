const screens = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

const breakpoints = reactive({ width: 0, height: 0, code: 'xs' })

const xs = (val: number) => val >= screens.xs && val < screens.sm
const sm = (val: number) => val >= screens.sm && val < screens.md
const md = (val: number) => val >= screens.md && val < screens.lg
const lg = (val: number) => val >= screens.lg && val < screens.xl
const xl = (val: number) => val >= screens.xl

const getBreakpoint = (width: number) => {
  if (xs(width)) return 'xs'
  else if (sm(width)) return 'sm'
  else if (md(width)) return 'md'
  else if (lg(width)) return 'lg'
  else if (xl(width)) return 'xl'
  else return 'all'
}

const setBreakpoint = () => {
  breakpoints.width = window.innerWidth
  breakpoints.height = window.innerHeight
  breakpoints.code = getBreakpoint(window.innerWidth)
}

const useBreakpoint = () => {
  onMounted(() => {
    setBreakpoint()
    window.addEventListener('resize', () => {
      setBreakpoint()
    })
  })

  return breakpoints;
}

export default useBreakpoint;