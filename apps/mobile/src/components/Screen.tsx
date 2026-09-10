import type { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors, space } from '@app/tokens'

interface Props {
	children: ReactNode
	edges?: ('top' | 'bottom')[]
}

export function Screen({ children, edges = ['top'] }: Props) {
	return (
		<SafeAreaView
			edges={edges}
			style={styles.container}
		>
			{children}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bg.base,
		paddingHorizontal: space[6]
	}
})
