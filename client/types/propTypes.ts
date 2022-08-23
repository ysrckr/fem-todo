export type theme = 'light' | 'dark'

export interface IPropsWithChildren {
	children: JSX.Element | JSX.Element[]
}

export type themeProp = {
	theme: theme
}

export interface IPropsWithChildrenTheme extends IPropsWithChildren {
	theme: theme
}
