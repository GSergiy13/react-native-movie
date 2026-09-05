import { Tabs } from 'expo-router'
import { Heart, Home, Search } from 'lucide-react-native'

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<Home
							color={color}
							size={24}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					tabBarIcon: ({ color }) => (
						<Search
							color={color}
							size={24}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='favorites'
				options={{
					title: 'Favorites',
					tabBarIcon: ({ color }) => (
						<Heart
							color={color}
							size={24}
						/>
					)
				}}
			/>
		</Tabs>
	)
}
