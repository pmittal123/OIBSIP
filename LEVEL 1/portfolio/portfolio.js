document.getElementById('projectSearch').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
    
        const searchTermNoSpace = searchTerm.replace(/\s+/g, '');
    
    const projects = document.querySelectorAll('.proj-box');
    
    projects.forEach(project => {
                const skillTags = Array.from(project.querySelectorAll('.lang .skill-tag'))
            .map(tag => ({
                original: tag.textContent.toLowerCase().trim(),
                normalized: tag.textContent.toLowerCase().replace(/\s+/g, '')
            }));
        
                const matchTags = skillTags.some(tag => 
            tag.original.includes(searchTerm) || 
            tag.normalized.includes(searchTermNoSpace)
        );
        
                console.log('Search term:', searchTerm);
        console.log('Search term (no spaces):', searchTermNoSpace);
        console.log('Tags:', skillTags);
        console.log('Match found:', matchTags);
        
                if (searchTerm === '' || matchTags) {
            project.style.display = 'flex';
            project.style.opacity = '1';
            project.style.transform = 'scale(1)';
        } else {
            project.style.display = 'none';
            project.style.opacity = '0';
            project.style.transform = 'scale(0.8)';
        }
    });
});
window.addEventListener('load', () => {
    const projects = document.querySelectorAll('.proj-box');
    projects.forEach(project => {
        project.style.opacity = '1';
        project.style.transform = 'scale(1)';
        project.style.display = 'flex';
    });
});
