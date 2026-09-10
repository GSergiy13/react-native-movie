import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import { MEDIA_TYPES } from '@app/types'

import { TYPE_LABELS } from '@app/constants'

import { colors, fontSize, space } from '@app/tokens'

import { Screen } from '@/components/Screen'

export default function Library() {
	return (
		<Screen>
			<Text>Library</Text>

			{MEDIA_TYPES.map(type => (
				<Link
					key={type}
					href={`/title/${type}/1`}
					style={style.item}
				>
					<Text>{TYPE_LABELS[type]}</Text>
				</Link>
			))}
		</Screen>
	)
}

const style = StyleSheet.create({
	item: {
		color: colors.text.primary,
		fontSize: fontSize.lg,
		paddingVertical: space[3]
	}
})
