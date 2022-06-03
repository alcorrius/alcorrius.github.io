import {For} from "solid-js"

const Links = () => {
	const listOfLinks = [{
			"name":"github",
			"link":"https://github.com/alcorrius"
		},{
			"name":"hackerrank",
			"link":"https://www.hackerrank.com/alcorrius"
		},{
			"name":"leetcode",
			"link":"https://leetcode.com/alcorrius"
		},{
			"name":"linkedin",
			"link":"https://www.linkedin.com/in/dotsenkovitalii"
		}];


	return (
		<div class="text-center">
			<ul>
				<For each={listOfLinks}>{(item, i)=> 
					<li><a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" href={item.link}>{item.name}</a></li>
				}
				</For>
			</ul>
		</div>
	);
}

export default Links