import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
	codeSlashOutline,
	folderOutline,
	homeOutline,
	mailOutline,
	personOutline,
} from "ionicons/icons";
import { Redirect, Route } from "react-router";
import {
	AboutPage,
	ContactPage,
	HomePage,
	ProjectsPage,
	SkillsPage,
} from "./pages";

setupIonicReact();

export function App() {
	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					<IonRouterOutlet>
						<Redirect exact path="/" to="/home" />

						<Route path="/home" render={() => <HomePage />} exact={true} />
						<Route path="/about" render={() => <AboutPage />} exact={true} />
						<Route
							path="/projects"
							render={() => <ProjectsPage />}
							exact={true}
						/>
						<Route path="/skills" render={() => <SkillsPage />} exact={true} />
						<Route
							path="/contact"
							render={() => <ContactPage />}
							exact={true}
						/>
					</IonRouterOutlet>
					<IonTabBar slot="bottom">
						<IonTabButton tab="home" href="/home">
							<IonIcon icon={homeOutline} />
							<IonLabel>Home</IonLabel>
						</IonTabButton>

						<IonTabButton tab="about" href="/about">
							<IonIcon icon={personOutline} />
							<IonLabel>About</IonLabel>
						</IonTabButton>

						<IonTabButton tab="projects" href="/projects">
							<IonIcon icon={folderOutline} />
							<IonLabel>Projects</IonLabel>
						</IonTabButton>

						<IonTabButton tab="skills" href="/skills">
							<IonIcon icon={codeSlashOutline} />
							<IonLabel>Skills</IonLabel>
						</IonTabButton>

						<IonTabButton tab="contact" href="/contact">
							<IonIcon icon={mailOutline} />
							<IonLabel>Contact</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	);
}
