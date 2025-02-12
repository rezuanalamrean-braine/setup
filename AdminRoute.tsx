export const AdminMenuItems = [
    { href: "/admin", icon: "bi-speedometer2", label: "Dashboard" },
    {
      href: "#",
      icon: "bi-box",
      label: "Manage Users",
      subMenu: [
        { href: "#", label: "Admin", icon: "bi-box" },
        {
          href: "#",
          label: "Trainee",
          icon: "bi-box",
          subMenu: [
            { href: "/admin/manage-users/trainee/view", label: "View Trainee", icon: "bi-box" },
            { href: "/admin/manage-users/trainee/approve", label: "Approve Application", icon: "bi-box" },
            { href: "/admin/manage-users/trainee/reject", label: "Reject Application", icon: "bi-box" },
          ],
        },
        { href: "#", label: "Learner", icon: "bi-box" },
      ],
    },
    {
        href: "#",
        icon: "bi-box",
        label: "Manage Users",
        subMenu: [
          { href: "#", label: "Admin", icon: "bi-box" },
          {href: "#", label: "Trainee", icon: "bi-box",},
          { href: "#", label: "Learner", icon: "bi-box" },
        ],
      },
      
      { href: "/admin/courses",
        icon: "bi-journal-text", 
        label: "Courses",
    
        subMenu: [
          { href: "#", label: "Manage Courses", icon: "bi-journal-text" },
          { href: "#", label: "Approved Course", icon: "bi-journal-text" },
          { href: "#", label: "Reject Courses", icon: "bi-journal-text" },
       
        ],
       },
    
      { href: "/admin/review-feedback",
        icon: "bi-chat-left-text",
        label: "Review Feedback",
    
        subMenu: [
          { href: "#", label: "Courses Review", icon: "bi-chat-left-text" },
          { href: "#", label: "Pending Review", icon: "bi-chat-left-text" },
       
        ],
       },
    
      { href: "/admin/revenue-reports",
        icon: "bi-bar-chart", 
        label: "Revenue Reports",
        subMenu: [
          { href: "#", label: "Monthly Revenue Summary", icon: "bi-bar-chart" },
          { href: "#", label: "Sales by Category", icon: "bi-bar-chart" },
          { href: "#", label: "Instructor Earnings Report", icon: "bi-bar-chart" },
       
        ],
    
      },
    { href: "/admin/bulk-notification", icon: "bi-bell", label: "Bulk Notification" },
    { href: "/admin/analytics", icon: "bi-graph-up", label: "Analytics" },
    { href: "/admin/settings", icon: "bi-gear", label: "Settings" },
    { href: "/admin/help", icon: "bi-question-circle", label: "Help" },
  ];
  