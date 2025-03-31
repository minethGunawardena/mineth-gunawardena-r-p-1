import styles from './ProjectsStyles.module.css'
import pro_1img from '../../assets/JIMP_logo.png'
import pro_2img from '../../assets/PY_Tube.png'
import pro_3img from '../../assets/NesEduCad.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
     <section id='projects' className= {styles.container}>
          <h1 className='sectionTitle'>Projects</h1>   
          <div className={styles.projectContainer}>
          <ProjectCard 
              src={pro_1img}
              link='https://github.com/minethGunawardena/ImageManagementTool'
              project_name='J.I.M.P'
              project_Discription='An Easy to Use Image Processing Tool'
            />
          <ProjectCard 
              src={pro_2img}
              link='https://github.com/minethGunawardena/YTDownloader'
              project_name='PY-Tube'
              project_Discription='Advanced YT Video Downloader'
            />
          <ProjectCard 
              src={pro_3img}
              link='https://github.com/Bhanu2001829/MAD-project'
              project_name='NES EDU CAD'
              project_Discription='Streamline Course Registration Applicaion'
            />
          </div>
     </section>
  );
 
}

export default Projects