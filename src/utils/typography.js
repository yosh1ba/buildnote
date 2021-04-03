import Typography from 'typography'
import theme from 'typography-theme-github' // テーマのインポート

theme.headerFontFamily = ['Noto Sans JP', 'sans-serif']
theme.bodyFontFamily = ['Noto Sans JP', 'sans-serif']
theme.googleFonts = [
  {
    name: 'Noto Sans JP',
    styles: ['400'],
  }
]

const typography = new Typography(theme)
export default typography