import React, { Component } from 'react';
import Card from '../common/Card';
import './Projects.css';
import repos_api from '../../repos_api';
import _ from 'lodash';

class Projects extends Component {
  state = { repos: [] };

  componentDidMount() {
    fetch('https://api.github.com/users/suldev8/repos?per_page=40&sort=created', {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' }
    })
      .then(res => res.json())
      .then(repos =>
        this.setState({
          repos: repos.filter(repo => {
            const checkRepo = _.find(repos_api, {id : repo.id});
              console.log(checkRepo);
            if(checkRepo){
              repo.project_url = checkRepo.project_url;
              return true;
            } else {
              return false;
            }
          })
        })
      );
  }
  render() {
    const { repos } = this.state;
    const reposCards = repos.map(repo => (
      <Card
        title={repo.name}
        description={repo.description}
        icons={repo.topics}
        repo_url={repo.html_url}
        project_url={repo.project_url}
      />
    ));

    return (
      <section id="projects">
        <h1>Projects</h1>
        <div className="cards-container">{reposCards}</div>
      </section>
    );
  }
}

export default Projects;
